import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | unicode', function(hooks) {
    setupRenderingTest(hooks);

    test('Helper works', async function(assert) {
        this.set('inputValue', '1234');

        await render(hbs`{{unicode inputValue}}`);

        assert.equal(this.element.textContent.trim(), '&#x1234;');
    });
});