<template lang="pug">
  section.about
    .container
      .section__wrap.about__wrap
        .about__top 
          h2.section__title.about__title Блок «Обо мне»    
          .about__add
            button.add
              .add__icon
                img(src="../../../images/content/add.png").plus
              span.add__title Добавить группу
        .about__bottom
          .about__card
            .skills
              form.form.skills__form
                .skills__wrap
                  .skills__top
                    .skills__title
                      input(type="text" placeholder="Название новой группы").input.input_active
                    .skills__btns
                      .skills__btn-child.skills__perform
                        button.perform
                      .skills__btn-child.skills__delete
                        button.delete
                  .skills__middle
                    ul.skills__list
                  .skills__bottom
                    .skills__new 
                      .skills__new-title
                        input(type="text" placeholder="Новый навык").input.input__new
                      .skills__new-rate.skills__rate
                        input(type="text" placeholder="100").input.input__rate.input__new
                      button.skills__add
                        img(src="../../../images/content/add.png").plus.plus_large
          .about__card
            .skills
              form.form
                .skills__wrap
                  .skills__top
                    .skills__title
                      input(type="text" placeholder="Название новой группы").input.input_active
                    .skills__btns
                      .skills__btn-child.skills__perform
                        button.perform
                      .skills__btn-child.skills__delete
                        button.delete
                  .skills__middle
                    ul.skills__list
                      li.skills__child
                        .skills__info
                          .skills__subtitle
                            input( type="text" value="Git").input
                          .skills__rate
                            input( type="text" value="100").input.input__rate
                        .skills__btns
                          .skills__btn-child.skills__edit
                            button.edit
                          .skills__btn-child.skills__remove
                            button.remove
                      li.skills__child
                        .skills__info
                          .skills__subtitle
                            input( type="text" value="Terminal").input
                          .skills__rate
                            input( type="text" value="90").input.input__rate
                        .skills__btns
                          .skills__btn-child.skills__edit
                            button.edit
                          .skills__btn-child.skills__remove
                            button.remove
                      li.skills__child
                        .skills__info
                          .skills__subtitle
                            input( type="text" value="Gulp").input
                          .skills__rate
                            input( type="text" value="90").input.input__rate
                        .skills__btns
                          .skills__btn-child.skills__edit
                            button.edit
                          .skills__btn-child.skills__remove
                            button.remove
                      li.skills__child
                        .skills__info
                          .skills__subtitle
                            input( type="text" value="Webpack").input
                          .skills__rate
                            input( type="text" value="90").input.input__rate
                        .skills__btns  
                          .skills__btn-child.skills__edit
                            button.edit
                          .skills__btn-child.skills__remove
                            button.remove
                  .skills__bottom
                    .skills__new 
                      .skills__new-title
                        input(type="text" placeholder="Новый навык").input.input__new
                      .skills__new-rate.skills__rate
                        input(type="text" placeholder="100").input.input__rate.input__new
                      button.skills__add
                        img(src="../../../images/content/add.png").plus.plus_large
          .about__card
            .skills
              form.form
                .skills__wrap
                  .skills__top
                    .skills__title
                      input(type="text" placeholder="Название новой группы").input.input_active
                    .skills__btns
                      .skills__edit
                      .skills__btn-child.skills__perform
                        button.perform
                      .skills__btn-child.skills__delete
                        button.delete
                  .skills__middle
                    ul.skills__list
                      li.skills__child
                        .skills__info
                          .skills__subtitle
                            input( type="text" value="Git").input
                          .skills__rate
                            input( type="text" value="100").input.input__rate
                        .skills__btns
                          .skills__btn-child.skills__edit
                            button.edit
                          .skills__btn-child.skills__remove
                            button.remove
                      li.skills__child
                        .skills__info
                          .skills__subtitle
                            input( type="text" value="CSS3").input
                          .skills__rate
                            input( type="text" value="90").input.input__rate
                        .skills__btns
                          .skills__btn-child.skills__edit
                            button.edit
                          .skills__btn-child.skills__remove
                            button.remove
                  .skills__bottom
                    .skills__new 
                      .skills__new-title
                        input(type="text" placeholder="Новый навык").input.input__new
                      .skills__new-rate.skills__rate
                        input(type="text" placeholder="100").input.input__rate.input__new
                      button.skills__add
                        img(src="../../../images/content/add.png").plus.plus_large
</template>

<script>
export default {};
</script>

<style lang="pcss">
@import '../../../styles/mixins.pcss';
@import '../../../styles/admin/about.pcss';
</style>