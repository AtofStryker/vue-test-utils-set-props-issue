import TestComponent from "./TestComponent";
import { shallowMount } from "@vue/test-utils";

describe("test issue", () => {
  it("reproduces issue", async () => {
    const wrapper = shallowMount(TestComponent, {
      propsData: {
        myProp: "prop1",
      },
    });

    wrapper.setProps({
      myProp: "prop2"
    })

    // this works
    expect(wrapper.vm.myProp).toEqual('prop2')

    // but after next tick runs
    await wrapper.vm.$nextTick()

    // the prop is prop1, where it should be prop2
    expect(wrapper.vm.myProp).toEqual('prop2')
  });
});
