import { shallow, ShallowWrapper } from 'enzyme';
import Counter from './Counter';


describe('Counter Testing', () => {

  let wrapper: ShallowWrapper;
  const incrementId = "#increment-btn";
  const decrementId = "#decrement-btn";


  beforeEach(() => {
    wrapper = shallow(<Counter/>)
  })

  test('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter app");
  });
  
  test("render a button with a text of `increment`", () => {
    expect(wrapper.find(incrementId).text()).toBe('Increment');
  });
  
  test("render the initial value of state a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find(incrementId).simulate("click");

    expect(wrapper.find("#counter-value").text()).toBe("1");
  });
  
  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find(incrementId).simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    
    wrapper.find(decrementId).simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("don't decrement below 0", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
    wrapper.find(decrementId).simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  })

})

