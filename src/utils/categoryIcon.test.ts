import { describe, it, expect } from 'vitest'
import { getCategoryIcon } from './categoryIcon'
import { mount } from '@vue/test-utils'

describe('getCategoryIcon', () => {
    it('returns a valid Vue component', () => {
        const iconComponent = getCategoryIcon('Freelance');

        const wrapper = mount(iconComponent);
        expect(wrapper.exists()).toBe(true);
    })
})