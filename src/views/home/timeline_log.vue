<template>
  <div class="timeline-area">
    <box-title title="Project Logs"></box-title>
    <v-dialog v-model="dialog" height="auto">
      <v-card v-show="dialog" width="80vw">
        <v-btn
          class="close-btn"
          color="error"
          icon="mdi mdi-close"
          @click="dialog = false"
        >
        </v-btn>
        <img
          class="full-image"
          :src="require(`@/assets/image/${enlargedImage}`)"
        />
      </v-card>
    </v-dialog>
    <v-timeline class="timeline" align="start" side="end">
      <v-timeline-item
        v-for="(item, i) in projectLog"
        :key="i"
        dot-color="#fff"
        icon="mdi-math-log"
        fill-dot
      >
        <v-card class="card">
          <v-card-title class="card-title text-h6">
            {{ item.date }}
          </v-card-title>
          <v-card-text class="bg-white text--primary">
            <div v-if="item.images && item.images.length > 0">
              <v-carousel
                show-arrows="hover"
                delimiter-icon="mdi-square"
                height="400"
                hide-delimiter-background
                class="carousel"
              >
                <v-carousel-item
                  v-for="(image, index) in item.images"
                  :key="index"
                  :src="require('@/assets/image/' + image)"
                  cover
                >
                  <v-btn
                    icon="mdi mdi-eye"
                    size="x-small"
                    class="view-full-image-btn"
                    @click="viewFullImage(image)"
                  >
                  </v-btn>
                </v-carousel-item>
              </v-carousel>
            </div>
            <div class="log-content">{{ item.text }}</div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { projectLog } from "@/assets/constant/log";
import BoxTitle from "@/components/boxTitle.vue";

const enlargedImage = ref<string | null>(null);
const dialog = ref<boolean>(false);

const viewFullImage = (image: string) => {
  enlargedImage.value = image;
  dialog.value = true;
};
</script>

<style lang="scss" scoped>
:deep(.close-btn) {
  position: absolute;
  top: 0;
  right: 0;
}

.timeline-area {
  background-color: #534c46;
  padding-top: 40px;

  .timeline {
    padding: 20px 40px;

    :deep(.v-timeline-item__body) {
      width: calc(100vw - 400px);
      max-width: 1500px;
    }

    .card {
      text-align: left;

      .card-title {
        background-color: #6d3729;
        color: aliceblue;
      }

      .carousel {
        margin-top: 10px;

        :deep(.v-carousel__controls .v-icon) {
          color: rgba(
            $color: aliceblue,
            $alpha: 0.8
          ); /* Change the color to red */

          &:hover {
            color: rgba($color: white, $alpha: 1);
          }
        }
      }

      .view-full-image-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        // color: white;
      }

      .log-content {
        margin-top: 10px;
        font-size: 18px;
        white-space: pre-wrap; /* 换行时保留空格和换行符 */
        word-wrap: break-word; /* 长单词换行 */
        line-height: 1.5;
      }
    }
  }
}
</style>
