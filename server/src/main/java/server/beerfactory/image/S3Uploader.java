package server.beerfactory.image;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
@Component
@Service
public class S3Uploader {
    private final AmazonS3Client amazonS3Client;

    private final AmazonS3 amazonS3;

    private static final int CAPACITY_LIMIT_BYTE = 1024 * 1024 * 4;
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public String upload(MultipartFile multipartFile) throws IOException {
        String s3FileName = UUID.randomUUID() + "-" + multipartFile.getOriginalFilename(); // s3에 저장되는 파일이름 중복안되게 하기

        //파일크기 용량제한 넘으면 예외 던지기
        if (multipartFile.getSize() > CAPACITY_LIMIT_BYTE) {
            throw new RuntimeException("이미지가 4M 제한을 넘어갑니다.");
        }

        ObjectMetadata objMeta = new ObjectMetadata();
        objMeta.setContentLength(multipartFile.getInputStream().available()); //파일의 사이즈 S3에 알려주기

        amazonS3.putObject(bucket, s3FileName, multipartFile.getInputStream(), objMeta); //S3 API 메소드 이용해서 S3에 파일 업로드

        return amazonS3.getUrl(bucket, s3FileName).toString(); //getUrl로 S3에 업로드된 사진 URL 가져오기
    }

    //S2로 업로드
    private String putS3(File uploadFile, String fileName) {
        amazonS3Client.putObject(
                new PutObjectRequest(bucket, fileName, uploadFile)
                        .withCannedAcl(CannedAccessControlList.PublicRead)
        );
        return amazonS3Client.getUrl(bucket, fileName).toString();
    }

    //로컬에 저장된 이미지 지우기
    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            log.info("파일이 삭제되었습니다.");
        } else {
            log.info("파일이 삭제되지 못했습니다.");
        }
    }

}