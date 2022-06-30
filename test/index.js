const simsekapi = require('../src/client');
const { expect } = require('chai');

const client = new simsekapi('294102481359863811-RFenelTlQJ');

describe('espiri function', () => {
  it('to have property espri', async () => {
    const result = await client.espiri();
    expect(result).to.have.property('espri');
  });
});
