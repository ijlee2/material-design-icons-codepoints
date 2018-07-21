import { helper } from '@ember/component/helper';

// Use this helper to prepend '\u' to create a Unicode
export function unicode(codepoint) {
    codepoint = codepoint.toString();

    if (!codepoint) {
        return '&#xe000;';
    }

    return `&#x${codepoint};`;
}

export default helper(unicode);