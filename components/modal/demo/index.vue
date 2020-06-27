<script>
import CAsynchronouslyClose from './asynchronously-close';
import CAsynchronouslyCloseString from '!raw-loader!./asynchronously-close';
import CConfirmationModalDialogUsePromise from './confirmation-modal-dialog-use-promise';
import CConfirmationModalDialogUsePromiseString from '!raw-loader!./confirmation-modal-dialog-use-promise';
import CCustomizedFooter from './customized-footer';
import CCustomizedFooterString from '!raw-loader!./customized-footer';
import CInternationalization from './internationalization';
import CInternationalizationString from '!raw-loader!./internationalization';
import CPosition from './position';
import CPositionString from '!raw-loader!./position';
import CDestroyConfirmationModalDialog from './destroy-confirmation-modal-dialog';
import CDestroyConfirmationModalDialogString from '!raw-loader!./destroy-confirmation-modal-dialog';
import CBasic from './basic';
import CBasicString from '!raw-loader!./basic';
import CConfirmationModalDialog from './confirmation-modal-dialog';
import CConfirmationModalDialogString from '!raw-loader!./confirmation-modal-dialog';
import CInformationModalDialog from './information-modal-dialog';
import CInformationModalDialogString from '!raw-loader!./information-modal-dialog';
import CManualToUpdateDestroy from './manual-to-update-destroy';
import CManualToUpdateDestroyString from '!raw-loader!./manual-to-update-destroy';
import CCustomizeFooterButtonsProps from './customize-footer-buttons-props';
import CCustomizeFooterButtonsPropsString from '!raw-loader!./customize-footer-buttons-props';
import CN from '../index.zh-CN';
import US from '../index.en-US';

const md = {
us:``,
cn:`# Modal 对话框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 \`Modal\` 在当前页面正中打开一个浮层，承载相应的操作。另外当需要一个简洁的确认框询问用户时，可以使用 \`Modal.confirm()\` 等语法糖方法。

## 代码演示`
};

export default {
  category: 'Components',
  subtitle: '对话框',
  type: 'Feedback',
  zhType: '反馈',
  cols: 2,
  title: 'Modal',
  render() {
    return (
      <div>
        <md cn={md.cn} us={md.us} />
        <demo-container code={CAsynchronouslyCloseString}><CAsynchronouslyClose /></demo-container>

<demo-container code={CConfirmationModalDialogUsePromiseString}><CConfirmationModalDialogUsePromise /></demo-container>

<demo-container code={CCustomizedFooterString}><CCustomizedFooter /></demo-container>

<demo-container code={CInternationalizationString}><CInternationalization /></demo-container>

<demo-container code={CPositionString}><CPosition /></demo-container>

<demo-container code={CDestroyConfirmationModalDialogString}><CDestroyConfirmationModalDialog /></demo-container>

<demo-container code={CBasicString}><CBasic /></demo-container>

<demo-container code={CConfirmationModalDialogString}><CConfirmationModalDialog /></demo-container>

<demo-container code={CInformationModalDialogString}><CInformationModalDialog /></demo-container>

<demo-container code={CManualToUpdateDestroyString}><CManualToUpdateDestroy /></demo-container>

<demo-container code={CCustomizeFooterButtonsPropsString}><CCustomizeFooterButtonsProps /></demo-container>

        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    );
  },
};
</script>