<script>
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CMore from './more';
import CMoreString from '!raw-loader!./more';
import CChanger from './changer';
import CChangerString from '!raw-loader!./changer';
import CCustomDropdownOptions from './custom-dropdown-options';
import CCustomDropdownOptionsString from '!raw-loader!./custom-dropdown-options';
import CJumper from './jumper';
import CJumperString from '!raw-loader!./jumper';
import CMini from './mini';
import CMiniString from '!raw-loader!./mini';
import CSimpleMode from './simple-mode';
import CSimpleModeString from '!raw-loader!./simple-mode';
import CControlled from './controlled';
import CControlledString from '!raw-loader!./controlled';
import CTotalNumber from './total-number';
import CTotalNumberString from '!raw-loader!./total-number';
import CPrevAndNext from './prev-and-next';
import CPrevAndNextString from '!raw-loader!./prev-and-next';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '分页',
  type: 'Navigation',
  zhType: '导航',
  cols: 1,
  title: 'Pagination',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CMoreString}><CMore /></demo-container>

<demo-container code={CChangerString}><CChanger /></demo-container>

<demo-container code={CCustomDropdownOptionsString}><CCustomDropdownOptions /></demo-container>

<demo-container code={CJumperString}><CJumper /></demo-container>

<demo-container code={CMiniString}><CMini /></demo-container>

<demo-container code={CSimpleModeString}><CSimpleMode /></demo-container>

<demo-container code={CControlledString}><CControlled /></demo-container>

<demo-container code={CTotalNumberString}><CTotalNumber /></demo-container>

<demo-container code={CPrevAndNextString}><CPrevAndNext /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>