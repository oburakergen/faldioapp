<template>
  <div>
    <PageTitle page-title="About Us" />
    <User />
    <Trial />
  </div>
</template>

<script>
import PageTitle from '../../components/Common/PageTitle';
import User from '../../components/Service/User';
import Trial from '../../components/Campaign/Trial';

export default {
    components: {
        PageTitle,
        User,
        Trial
    }
};
</script>
