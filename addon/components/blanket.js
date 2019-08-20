import Component from '@ember/component';
import { computed } from '@ember/object';
import objStr from 'hex/-private/obj-str';
import layout from '../templates/components/blanket';

/**
  A component that covers the underlying UI for a layered component.

  ```hbs
  <Blanket @isTinted @canClickThrough></Blanket>
  ```

  @class Blanket
  @public
*/
export default class BlanketComponent extends Component {
  layout = layout;
  tagName = '';

  @computed('isTinted', 'canClickThrough')
  get _classNames() {
    return objStr({
      'blanket-tinted': this.isTinted,
      'blanket-click-through': this.canClickThrough
    });
  }
}
