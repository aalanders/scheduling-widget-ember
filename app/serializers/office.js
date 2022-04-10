import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class OfficeSerializer extends JSONAPISerializer {
  // Needed because JSON serializer looks for dasherized names by default, not camelcase
  keyForAttribute(key) {
    return key;
  }
}
