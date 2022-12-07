import Controller from '@ember/controller';

export default class IndexController extends Controller {
  async doSomething() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
