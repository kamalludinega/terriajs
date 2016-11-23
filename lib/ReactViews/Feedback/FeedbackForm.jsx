'use strict';

import ObserveModelMixin from '../ObserveModelMixin';
import React from 'react';
import sendFeedback from '../../Models/sendFeedback.js';
import shareLink from '..//Map/Panels/SharePanel/BuildShareLink.js';
import Styles from './feedback-form.scss';
import Icon from "../Icon.jsx";
import classNames from "classnames";

const FeedbackForm = React.createClass({
    mixins: [ObserveModelMixin],

    propTypes: {
        viewState: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            isSending: false,
            sendShareURL: false,
            name: '',
            email: '',
            comment: ''
        };
    },

    onDismiss() {
        this.props.viewState.feedbackFormIsVisible = false;
        this.state = this.getInitialState();
    },

    onSubmit(evt) {
        evt.preventDefault();

        if (this.state.comment.length > 0) {
            this.setState({
                isSending: true
            });

            const link = this.sendShareURL
                       ? (shareLink.canShorten(this.props.viewState.terria)
                         ? shareLink.buildShortShareLink(this.props.viewState.terria)
                         : shareLink.buildShareLink(this.props.viewState.terria))
                       : "Not shared";

            // submit form
            sendFeedback({
                terria: this.props.viewState.terria,
                name: this.state.name,
                email: this.state.email,
                shareLink: link,
                comment: this.state.comment
            }).then(succeeded => {
                if (succeeded) {
                    this.setState({
                        isSending: false,
                        sendShareURL: false,
                        comment: ''
                    });
                    this.props.viewState.feedbackFormIsVisible = false;
                } else {
                    this.setState({
                        isSending: false,
                        sendShareURL: false
                    });
                }
            });
        }

        return false;
    },

    handleChange(e) {
        this.setState({
            [e.target.getAttribute('name')]: e.target.value
        });
    },

    render() {
        const feedbackFormClassNames = classNames(Styles.form, {
            [Styles.isOpen]: this.props.viewState.feedbackFormIsVisible
        });
        return (
            <div className='feedback__inner'>
                <div className={feedbackFormClassNames}>
                    <div className={Styles.header}>
                        <h4 className={Styles.title}>Feedback</h4>
                        <button className={Styles.btnClose} onClick ={this.onDismiss} title='close feedback'>
                            <Icon glyph={Icon.GLYPHS.close}/>
                        </button>
                    </div>
                    <form onSubmit={this.onSubmit}>
                      <div className={Styles.description}>We would love to hear from you!</div>
                      <label>Your name (optional)</label>
                      <input type="text" name="name" className={Styles.field} value={this.state.name} onChange={this.handleChange}/>
                      <label>Email address (optional)<br/><em>We can't follow up without it!</em></label>
                      <input type="text" name="email" className={Styles.field} value={this.state.email} onChange={this.handleChange}/>
                      <label>Comment or question</label>
                      <textarea className={Styles.field} name="comment" value={this.state.comment} onChange={this.handleChange}/>
                      <label>
                        <input type="checkbox" name="sendShareURL" checked={this.state.sendShareURL}/>
                          Share my map view with the National Map's developers<br/>
                        <small>This helps us to troubleshoot issues by letting us see what you're seeing</small>
                      </label>
                      <div className={Styles.action}>
                        <button type="button" className={Styles.btnCancel} onClick ={this.onDismiss}>Cancel</button>
                        <button type="submit" className={Styles.btnSubmit} disabled={this.state.isSending}>{this.state.isSending ? 'Sending...' : 'Send'}</button>
                      </div>
                    </form>
            </div>
          </div>
        );
    }
});

module.exports = FeedbackForm;
