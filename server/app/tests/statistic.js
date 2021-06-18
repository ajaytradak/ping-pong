const chai = require('chai');
const request = require('supertest');
const app = require('../../server');
const expect = chai.expect;

describe('Test Statistic API', () => {
  it ('Storing statistic to the database', (done) => {
    const data = {
      player1_name: 'player1',
      player1_score: 10,
      player2_name: 'player2',
      player2_score: 6,
      winner: "player1",
      margin: 4
    }
    request(app)
    .post('/statistic/store')
    .send(data)
    .expect(200)
    .end((err, res) => {
      if (!err) {
        expect(res.body.message).to.be.equal('Statistics has been stored successfully');
        done();
      }
    })
  })
})
