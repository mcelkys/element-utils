Articles.define('children', Macro => [
    {
        tag: 'p',
        html: `Creates child ${Macro.HTML_ELEMENT} instances and appends them to
        the resulting ${Macro.HTML_ELEMENT} in the order they are defined. The
        <b>children</b> option is designed for cases, where mutliple children
        need to be created from options ${Macro.OBJECT} instances. In case you
        only require to have a single child, it is better to use the ${Macro.CHILD}
        option.`
    },
    {
        tag: 'section',
        class: 'warning',
        children: [
            {
                tag: 'p',
                html: `Note: ${Macro.CHILD}, <b>children</b>, ${Macro.NODES}, ${Macro.NODE_},
                ${Macro.TEXT} and ${Macro.HTML} options are designed to be used separately
                because they all provide different ways of creating nested content. Using
                a combination of the above options may produce unexpected results. The
                order in which options get evaluated is not predictable, as a
                result nodes may be added in inconsistent order or overwritten. In most JavaScript
                engines, options will be evaluated in the order that they were defined,
                however no JavaScript engine actually guarantees that.`
            },
            {
                tag: 'p',
                html: `Because <b>options</b> are defined in a plain ${Macro.OBJECT},
                <i>Elements</i> library internally uses a ${Macro.FORIN} loop to process
                them. For more information on why options are evaluated in arbitrary order,
                please see this <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#Description">description</a>.`
            }
        ]
    },
    {
        tag: 'section',
        children: [
            { tag: 'h3', text: 'Value' },
            {
                tag: 'p',
                html: `An ${Macro.ARRAY} of valid <b>options</b> ${Macro.OBJECT} instances
                that could be used with ${Macro.FRAGMENTS_CREATE} function on its own.`
            }
        ]
    },
    {
        tag: 'section',
        children: [
            { tag: 'h3', text: 'Example' },
            {
                tag: 'p',
                html: `The following example creates a ${Macro.UL} list with three
                nested child ${Macro.LI} instances by mapping out an ${Macro.ARRAY} of
                color values to an array of <b>options</b> objects.`
            },
            {
                class: 'responsive',
                children: [
                    {
                        tag: 'pre',
                        children: [
                            { tag: 'h4', text: 'JavaScript' },
                            {
                                tag: 'code',
                                text:
`const colors = ['Red', 'Green', 'Blue'];
Elements.create({
    tag: 'ul',
    children: colors.map(color => ({
        tag: 'li',
        text: color
    }))
});`
                            }
                        ]
                    },
                    {
                        tag: 'pre',
                        children: [
                            { tag: 'h4', text: 'Equivalent HTML' },
                            {
                                tag: 'code',
                                text:
`<ul>
    <li>Red</li>
    <li>Green</li>
    <li>Blue</li>
</ul>`
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);
