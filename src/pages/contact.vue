<template>
  <q-page class="q-mt-none q-pt-none flex" padding>
    <div >
        <h3>Contact Us</h3>
        <q-form
        class="q-gutter-y-md column"
        @submit="submit"
        @reset="reset"
        >
        <q-input
          clearable
          filled
          color="purple-12"
          v-model="name"
          label="Your Name"
        />
        <q-input
          clearable
          filled
          color="purple-12"
          v-model="email"
          label="Your email"
        />
        <q-input
          clearable
          filled
          color="purple-12"
          v-model="company"
          label="Company Name"
        />
        <q-input
          clearable
          filled
          color="purple-12"
          v-model="phone"
          label="Phone Number"
        />
        <q-input
          clearable
          filled
          color="purple-12"
          v-model="message"
          rows="5"
          cols="33"
          label="Message"
        />
          <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
        </q-form>
    
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
