## API

| property | description | type | default |
| --- | --- | --- | --- |
| autoFocus | get focus when component mounted | boolean | false |
| defaultValue | initial value | number |  |
| disabled | disable the input | boolean | false |
| formatter | Specifies the format of the value presented | function(value: number \| string): string | - |
| max | max value | number | Infinity |
| min | min value | number | -Infinity |
| parser | Specifies the value extracted from formatter | function( string): number | - |
| precision | precision of input value | number | - |
| decimalSeparator | decimal separator | string | - |
| size | width of input box | string | - |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal. | number\|string | 1 |
| value(v-model) | current value | number |  |
| maxlength | max count of chars | string\|number |  |

### events

| Events Name | Description | Arguments |
| --- | --- | --- |
| change | The callback triggered when the value is changed. | function(value: number \| string) |  |

## Methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | remove focus |
| focus() | get focus    |
