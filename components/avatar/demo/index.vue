<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CType from './type';
import CTypeString from '!raw-loader!./type';
import CWithBadge from './with-badge';
import CWithBadgeString from '!raw-loader!./with-badge';
import CAutosetFontSize from './autoset-font-size';
import CAutosetFontSizeString from '!raw-loader!./autoset-font-size';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Avatar头像

用来代表用户或事物，支持图片、图标或字符展示。

## 设计师专属

安装 [Kitchen Sketch 插件 �](https://kitchen.alipay.com)，一键填充高逼格头像和文本.

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '头像',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 2,
  title: 'Avatar',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CTypeString}><CType /></demo-container>
</a-col>
          <a-col span={12} class="code-boxes-col-2-1">
            <demo-container code={CWithBadgeString}><CWithBadge /></demo-container>
            <demo-container code={CAutosetFontSizeString}><CAutosetFontSize /></demo-container>
</a-col>
        </a-row>
        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>
