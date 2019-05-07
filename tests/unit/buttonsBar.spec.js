import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ButtonsBar from '@/components/ButtonsBar.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ButtonsBar.vue actions for buttons', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      getHistoryData: jest.fn(),
      actionInput: jest.fn(),
      toggleRealTime: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  test('calls store action "getHistoryData" when button is clicked', () => {
    const wrapper = shallowMount(ButtonsBar, { store, localVue });
    wrapper.find('#historyBtn').trigger('click');
    expect(actions.getHistoryData).toHaveBeenCalled();
  });

  test('calls store action "toggleRealTime" when button is clicked', () => {
    const wrapper = shallowMount(ButtonsBar, { store, localVue });
    wrapper.find('#realtimeToggler').trigger('click');
    expect(actions.toggleRealTime).toHaveBeenCalled();
  });
});
