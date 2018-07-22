import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);

        this.set('isSearching', true);
        this.createCodepoints(this.exponent);
    },

    // Create all codepoints that Material Design Icons can use
    createCodepoints(exponent) {
        let   allCodepoints = [];
        const numCodepoints = Math.pow(2, exponent);

        // Number of hexadecimal characters that we expect to see
        const numCharacters = Math.ceil(Math.log(numCodepoints) / Math.log(16));

        for (let i = 0; i < numCodepoints; i++) {
            // Convert i to hexadecimal
            const i_hex = i.toString(16);

            // Pad zeros
            const codepoint = 'e' + '0'.repeat(numCharacters - i_hex.length) + i_hex;

            // Save
            allCodepoints.push(codepoint);
        }

        this.set('allCodepoints', allCodepoints);
    },

    didInsertElement() {
        this._super(...arguments);

        let codepointsFiltered = [];

        this.get('allCodepoints').forEach(codepoint => {
            // Use the temporary icon element to try to render an icon
            let iconElement = document.querySelector('#temporary-icon');

            iconElement.innerHTML = `&#x${codepoint};`;

            // Use the width to check if the icon is defined
            if (iconElement.offsetWidth === 24) {
                codepointsFiltered.push({
                    codepoint,
                    key: ''
                });
            }
        });

        this.set('codepoints', codepointsFiltered.mapBy('codepoint'));
        this.set('codepointsJSON', JSON.stringify(codepointsFiltered, null, 4));

        // Show all codepoints that will create an icon
        this.set('isSearching', false);
    }
});