<template>
    <vue3-seamless-scroll
        :value="scroll"
        @input="handleScrollChange"
        :list="datas"
        :single-height="singleHeight"
        :single-wait-time="singleWaitTime"
        :limit-scroll-num="limitScrollNum">
        <slot></slot>
    </vue3-seamless-scroll>
</template>

<script setup lang="ts">
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

interface Props {
    scroll: boolean;
    datas: any[];
    singleHeight: number;
    singleWaitTime?: number;
    limitScrollNum?: number;
}

// 接收父组件传递的 prop
const props = withDefaults(defineProps<Props>(), {
    singleWaitTime: 3000,
    limitScrollNum: 10,
});

// 声明触发事件（通知父组件更新 scroll 值）
const emit = defineEmits<{
    (e: 'update:scroll', value: boolean): void;
}>();

// 当滚动状态变化时，触发事件让父组件更新
const handleScrollChange = (newValue: boolean) => {
    emit('update:scroll', newValue);
};
</script>

<style scoped lang="less"></style>