import Model, { attr } from '@ember-data/model';

export default class CptCodeModel extends Model {
  @attr('string') description;
  @attr('number') duration;
  @attr('string') rate;
  @attr('boolean') callToBook;

  get durationDisplay() {
    return `${this.duration} minutes`;
  }
}
