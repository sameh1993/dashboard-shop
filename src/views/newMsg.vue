<script>
import composeComp from "@/components/mailbox/compose.vue";
import newMsg from "@/components/mailbox/newMsg.vue";

export default {
    components: {
        composeComp,
        newMsg
    }
}
</script>

<template>
    <div class="inner-block">
        <div class="inbox">
            <h2> inbox details </h2>
            
            <!-- start compose -->
            <compose-comp />
            
            <!-- start new msg -->
            <new-msg />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.inbox {
    overflow: hidden;
}
</style>