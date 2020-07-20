export default `
<style>
    ::slotted(*) {
        flex: 1 1 auto;
    }
</style>
<slot></slot>
<slot name="divider"></slot>
`; 