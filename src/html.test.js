test('HTM is bound to React.createElement', () => {
  const div = html`<div></div>`;

  expect(div['$$typeof'].toString()).toBe('Symbol(react.element)');
});
