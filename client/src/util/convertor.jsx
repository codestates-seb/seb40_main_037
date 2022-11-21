import moment from 'moment';

export function relTimeFormat(createdAt) {
  const changed = moment(createdAt) + 33193666;

  return moment(changed).fromNow();
}
