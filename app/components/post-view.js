import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostViewComponent extends Component {

  @service router;

  @action
  async removePost (post){
    console.log('remove post', post)
    await post.destroyRecord();
    this.router.transitionTo('/posts');
  }

}
