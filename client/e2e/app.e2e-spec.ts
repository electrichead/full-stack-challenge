import { PaytmChallengeFrontEndPage } from './app.po';

describe('paytm-challenge-front-end App', function() {
  let page: PaytmChallengeFrontEndPage;

  beforeEach(() => {
    page = new PaytmChallengeFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
