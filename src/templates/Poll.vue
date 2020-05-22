<template>
  <Layout>
    <h1>
      {{ $page.doc.title }}
    </h1>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.doc.title,
      meta: [
        { key: 'description', name: 'description', content: this.$page.doc.description }
      ]
    }
  }
}
</script>