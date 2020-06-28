<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CBorder from './border';
import CBorderString from '!raw-loader!./border';
import CCustomSize from './custom-size';
import CCustomSizeString from '!raw-loader!./custom-size';
import CResponsive from './responsive';
import CResponsiveString from '!raw-loader!./responsive';
import CVertical from './vertical';
import CVerticalString from '!raw-loader!./vertical';
import CVerticalBorder from './vertical-border';
import CVerticalBorderString from '!raw-loader!./vertical-border';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Descriptions 描述列表 (版本: 1.5.0+)

成组展示多个只读字段。

## 何时使用

常见于详情页的信息展示。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '描述列表',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 1,
  title: 'Descriptions',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <a-row style="margin-left: -8px;margin-right: -8px;">
          <a-col span={24} class="code-boxes-col-1-1">
            <demo-container code={CBasicString}><CBasic /></demo-container>
            <demo-container code={CBorderString}><CBorder /></demo-container>
            <demo-container code={CCustomSizeString}><CCustomSize /></demo-container>
            <demo-container code={CResponsiveString}><CResponsive /></demo-container>
            <demo-container code={CVerticalString}><CVertical /></demo-container>
            <demo-container code={CVerticalBorderString}><CVerticalBorder /></demo-container>
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
