<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CConfigprovider from './configprovider';
import CConfigproviderString from '!raw-loader!./configprovider';
import CCustomize from './customize';
import CCustomizeString from '!raw-loader!./customize';
import CNoDescription from './no-description';
import CNoDescriptionString from '!raw-loader!./no-description';
import CChoseImage from './chose-image';
import CChoseImageString from '!raw-loader!./chose-image';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# 空状态

空状态时的展示占位图。

空状态时的展示占位图。

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '空状态',
  type: 'Data Display',
  zhType: '数据展示',
  cols: 1,
  title: 'Empty',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CConfigproviderString}><CConfigprovider /></demo-container>

<demo-container code={CCustomizeString}><CCustomize /></demo-container>

<demo-container code={CNoDescriptionString}><CNoDescription /></demo-container>

<demo-container code={CChoseImageString}><CChoseImage /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>