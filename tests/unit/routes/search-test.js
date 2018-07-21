import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | search', function(hooks) {
    setupTest(hooks);

    test('Route exists', function(assert) {
        let route = this.owner.lookup('route:search');
        assert.ok(route);
    });
});