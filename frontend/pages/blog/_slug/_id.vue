<template>
  <div>
    <PageTitle page-title="Blog Details" />
    <BlogDetails />
  </div>
</template>

<script>
import PageTitle from '../../../components/Common/PageTitle';
import BlogDetails from '../../../components/Blog/BlogDetails';

export default {
    components: {
        PageTitle,
        BlogDetails
    }
};
</script>
