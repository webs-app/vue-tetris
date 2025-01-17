import { i18n, lan } from '../../unit/const'
import { isMobile } from '../../unit'
export default {
  name: 'Guide',
  data() {
    return {
      isMobile: isMobile()
    }
  },
  computed: {
    linkTitle: () => i18n.linkTitle[lan],
    github: () => i18n.github[lan],
    QRCode: () => i18n.QRCode[lan],
    QRTitle: () => i18n.QRNotice[lan],
    QRSrc: () =>{}
      // window.location.protocol +
      // '//raw.githubusercontent.com/Binaryify/vue-tetris/master/static/qr.jpeg'
  },
  mounted() {
    window.addEventListener('resize', this.resize.bind(this), true)
    
    document.addEventListener('DOMContentLoaded', function() {
      window.$G.removeBackButton();
          window.$G&&window.$G.setScreenOrientation({
              orientation:"portrait",
              success(info){
                  console.log("info")
              },
              fail(err){
                  console.log(err)
              },
          });
    })
  },
  methods: {
    resize() {
      this.isMobile = isMobile()
    }
  }
}
