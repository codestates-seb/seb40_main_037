import moment from 'moment';

export function relTimeFormat(createdAt) {
  const changed = moment(createdAt);

  return moment(changed).format('YYYY-MM-DD HH:mm:ss');
}
