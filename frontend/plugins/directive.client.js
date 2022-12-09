import Vue from 'vue';

Vue.directive('locale-date-string', {
    inserted: (el) => {
        el.innerText = new Date(el.innerText).toLocaleDateString(
            'tr',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'utc'
            }
        );
    }
});
