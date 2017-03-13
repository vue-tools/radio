import Vue from 'vue'
import Radio from '../src'
import { expect } from 'chai'


describe('vt-checkbox', () => {
    it('radio default', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <Radio val="1">input radio</Radio>
                )
            },
            components: {
                Radio
            }
        }).$mount()
        let input = vm.$el.querySelector('.ui-radio__input')
        expect(vm.$el.classList.contains('ui-radio')).to.equal(true)
        expect(!!input).to.equal(true)
        expect(input.disabled).to.equal(false)
        expect(input.checked).to.equal(false)
        expect(vm.$el.querySelector('.ui-radio__label').innerHTML).to.equal('input radio')
    })
    it('radio disabled', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <Radio disabled>input radio</Radio>
                )
            },
            components: {
                Radio
            }
        }).$mount()
        expect(vm.$el.querySelector('.ui-radio__input').disabled).to.equal(true)
    })
    it('radio checked', () => {
        let vm = new Vue({
            data() {
                return {
                    opt: '3'
                }
            },
            // the `vue.runtime.common.js` version not support jsx v-model
            // `vue.common.js` is used in the `v-model` tests sample replace of runtime version
            template: `
                <div class="radio">
                    <Radio v-model="opt" val="1">input radio 1</Radio>
                    <Radio v-model="opt" val="2">input radio 2</Radio>
                    <Radio v-model="opt" val="3">input radio 3</Radio>
                    <Radio v-model="opt" val="4">input radio 4</Radio>
                </div>
            `,
            components: {
                Radio
            }
        }).$mount()
        let inputs = vm.$el.querySelectorAll('.ui-radio')
        expect(inputs[2].querySelector('.ui-radio__input').value).to.equal('3')
        expect(inputs[2].querySelector('.ui-radio__input').checked).to.equal(true)
    })
})
