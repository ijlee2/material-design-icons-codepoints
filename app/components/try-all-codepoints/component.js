import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);

        this.createCodepoints(this.get('exponent'));
    },

    didInsertElement() {
        this._super(...arguments);

        let codepointsFiltered = [];

        this.get('codepoints').forEach(codepoint => {
            // Use the width to check if the icon is defined
            let iconElement = document.querySelector(`#${codepoint} i`);

            if (iconElement.offsetWidth < 24) {
                // Hide the div element
                iconElement.parentElement.className += ' hide';

            } else {
                codepointsFiltered.push({
                    codepoint,
                    key: ''
                });

            }
        });

        this.set('codepointsJSON', JSON.stringify(codepointsFiltered, null, 4));
    },

    // Create all codepoints that Material Design Icons might use
    createCodepoints(exponent) {
        let   codepoints    = [];
        const numCodepoints = Math.pow(2, exponent);

        // Number of hexadecimal characters that we expect to see
        const numCharacters = Math.ceil(Math.log(numCodepoints) / Math.log(16));

        for (let i = 0; i < numCodepoints; i++) {
            // Convert i to hexadecimal
            const i_hex = i.toString(16);

            // Pad zeros
            const codepoint = `e` + '0'.repeat(numCharacters - i_hex.length) + i_hex;

            // Save
            codepoints.push(codepoint);
        }

        this.set('codepoints', codepoints);
    }
});