import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PostsIndexController extends Controller {

  newTitle;

  @action
  addPost (){
    console.log('new post')
    this.store.createRecord('post', {
      title: this.newTitle,
      publishedAt: new Date()
    }).save();
    this.set('newTitle', '')
  }
}
