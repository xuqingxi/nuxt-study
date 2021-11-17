<template>
  
<div class="editor-page">
    <div class="container page">
        <div class="row">

            <div class="col-md-10 offset-md-1 col-xs-12">
                <form ref="form">
                    <fieldset>
                        <fieldset class="form-group">
                            <input v-model="article.title" required type="text" class="form-control form-control-lg" placeholder="Article Title">
                        </fieldset>
                        <fieldset class="form-group">
                            <input v-model="article.description" required type="text" class="form-control" placeholder="What's this article about?">
                        </fieldset>
                        <fieldset class="form-group">
                            <textarea v-model="article.body" required class="form-control" rows="8"
                                      placeholder="Write your article (in markdown)"></textarea>
                        </fieldset>
                        <fieldset class="form-group">
                            <input @change="addTag" type="text" :required="!article.tagList.length" class="form-control" placeholder="Enter tags">
                            <div class="tag-list" v-for="tag in article.tagList" :key="tag">{{tag}}</div>
                        </fieldset>
                        <button class="btn btn-lg pull-xs-right btn-primary" type="submit" @click="submit">
                            Publish Article
                        </button>
                    </fieldset>
                </form>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import { createArticle } from '../../api/article'
export default {
  name: 'editor',
  middleware: 'authenticated',
  data() {
      return {
          article: {
              title: '',
              description: '',
              body: '',
              tagList: []
          }
      }
  },
  methods: {
      addTag(e) {
          if(this.article.tagList.includes(e.target.value)) return
          this.article.tagList.push(e.target.value)
          e.target.value = ''
      },
      async submit(e) {
           console.dir(this.$refs.form)
        //   e.preventDefault()
        //   let res = await createArticle({
        //       article
        //   })
        //   console.log(res);
      }
  }
}
</script>

<style>

</style>