
<template>
    <ZtScale>
        <screen :height="1080" title="数据监控平台" :textWidth="250">
            <div class="red">11111</div>
        </screen>
    </ZtScale>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { Screen, Card, DanceNumber, ZtEchart, ZtScale } from "@jxh1997/datav-core";
import { throttle } from "@jxh1997/datav-core/src/utils/common.util";
const accumulatedSaleTicket = ref(0);

let realtimeInterval: number | undefined = 0;

onMounted(() => {
    realtimeInterval = window.setInterval(() => {
        accumulatedSaleTicket.value += Math.floor(Math.random() * 1000);
    }, 5 * 1000);
});

onUnmounted(() => {
    if (realtimeInterval) window.clearInterval(realtimeInterval);
});

const onResize = throttle(() => {
    EventBusUtils.post("WindowResize");
}, 500);

window.onresize = onResize;
</script>

<style lang="less">
</style>
