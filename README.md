# test-reusable-button

## Project setup
```
npm install --save test-reusable-button
```
or
```
yarn add test-reusable-button
```

## Basic Usage
```
<template>
  <test-reusable-btn
    :customStyle="{
        color: 'gray',
        fontSize: '2rem',
        padding: '1rem 2rem',
        borderRadius: '1rem',
      }"
  />
</template>
<script>
import TestReusableButton from "test-reusable-button";

export default {
  components:{
    TestReusableButton
  }
}
</script>
```