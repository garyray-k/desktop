import * as React from 'react'
import { Dispatcher } from '../dispatcher'
import { Repository } from '../../models/repository'
import { ToolbarButton, ToolbarButtonStyle } from './button'
import {
  DropdownState,
  IToolbarDropdownProps,
  ToolbarDropdownStyle,
} from './dropdown'
import { FoldoutType } from '../../lib/app-state'

interface IRemoteManagerButtonProps {
  /** The global dispatcher, to invoke repository operations. */
  readonly dispatcher: Dispatcher

  /** The current repository */
  readonly repository: Repository

  /** Whether or not the push-pull dropdown is currently open */
  readonly isDropdownOpen: boolean

  /**
   * An event handler for when the drop down is opened, or closed, by a pointer
   * event or by pressing the space or enter key while focused.
   *
   * @param state    - The new state of the drop down
   */
  readonly onDropdownStateChanged: (state: DropdownState) => void
}

export class RemoteManagerButton extends React.Component<IRemoteManagerButtonProps> {
  /** The common props for all button states */
  private defaultButtonProps() {
    return {
      className: 'remote-manager-button',
      style: ToolbarButtonStyle.Subtitle,
    }
  }

  /** The common props for all dropdown states */
  private defaultDropdownProps(): Omit<
    IToolbarDropdownProps,
    'dropdownContentRenderer'
  > {
    return {
      buttonClassName: 'remote-manager-button',
      style: ToolbarButtonStyle.Subtitle,
      dropdownStyle: ToolbarDropdownStyle.MultiOption,
      dropdownState: this.props.isDropdownOpen ? 'open' : 'closed',
      onDropdownStateChanged: this.props.onDropdownStateChanged,
    }
  }

  private closeDropdown() {
    this.props.dispatcher.closeFoldout(FoldoutType.RemoteManager)
  }

  public render() {
    return this.renderButton()
  }

  private remoteButton(onClick: () => void, className: string | undefined) {
    return (
      <ToolbarButton
        {...this.defaultButtonProps()}
        title={'Remote Button'}
        description={'Hang on…'}
        tooltip={'tooltip!'}
        onClick={onClick}
        className={className}
      />
    )
  }

  private renderButton() {
    const onClick = this.closeDropdown
    const className = this.defaultDropdownProps().className
    if (true) {
      return this.remoteButton(onClick, className)
    }
    // return (
    //   <ToolbarDropdown
    //     {...this.defaultDropdownProps()}
    //     title="Publish branch"
    //     description={'test'}
    //     onClick={onClick}
    //     className={className}
    //     dropdownContentRenderer={this.getDropdownContentRenderer()}
    //   />
    // )
  }
  // private getDropdownContentRenderer() {
  //   return () => {
  //     return <RemoteManagerButtonDropdown />
  //   }
  // }
}
