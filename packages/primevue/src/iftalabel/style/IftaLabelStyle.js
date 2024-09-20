import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-iftalabel {
    display: block;
    position: relative;
}

.p-iftalabel label {
    position: absolute;
    pointer-events: none;
    top: ${dt('iftalabel.top')};
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-size: ${dt('iftalabel.font.size')};
    font-weight: ${dt('iftalabel.font.weight')};
    left: ${dt('iftalabel.position.x')};
    color: ${dt('iftalabel.color')};
    transition-duration: ${dt('iftalabel.transition.duration')};
}

.p-iftalabel .p-inputtext,
.p-iftalabel .p-textarea,
.p-iftalabel .p-select-label,
.p-iftalabel .p-multiselect-label-container,
.p-iftalabel .p-autocomplete-input-multiple,
.p-iftalabel .p-cascadeselect-label,
.p-iftalabel .p-treeselect-label {
    padding-top: ${dt('iftalabel.input.padding.top')};
}

.p-iftalabel:has(.p-invalid) label {
    color: ${dt('iftalabel.invalid.color')};
}

.p-iftalabel:has(input:focus) label ,
.p-iftalabel:has(input:-webkit-autofill) label,
.p-iftalabel:has(textarea:focus) label ,
.p-iftalabel:has(.p-inputwrapper-focus) label  {
    color: ${dt('iftalabel.focus.color')};
}

/*.p-iftalabel .p-placeholder,
.p-iftalabel input::placeholder,
.p-iftalabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-iftalabel .p-focus .p-placeholder,
.p-iftalabel input:focus::placeholder,
.p-iftalabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}*/
`;

const classes = {
    root: 'p-iftalabel'
};

export default BaseStyle.extend({
    name: 'iftalabel',
    theme,
    classes
});
