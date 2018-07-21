import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | try-all-codepoints', function(hooks) {
    setupRenderingTest(hooks);

    test('Component renders', async function(assert) {
        await render(hbs`{{try-all-codepoints exponent=1}}`);

        assert.ok(true);
    });
});