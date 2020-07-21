import TestComponent from './TestComponent'
import { shallowMount } from '@vue/test-utils'

describe('test issue', () => {
    it('reproduces issue', () => {
        const wrapper = shallowMount(TestComponent)
    })
})