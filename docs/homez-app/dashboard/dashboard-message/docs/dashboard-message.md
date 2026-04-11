# Message

## URL and Page Title

- **URL:** https://homez-appdir.vercel.app/dashboard-message
- **Page Title:** Messages || Homez - Real Estate NextJS Template
- **Route:** `/dashboard-message`

---

## Page Overview

The Message page provides a real estate messaging interface where users can communicate with potential buyers, renters, agents, and other platform users. It features a split-view layout with a conversation list on the left and an active chat thread on the right. This page enables property-related discussions, inquiry responses, and general communication within the Homez platform ecosystem.

### Primary Purpose

1. Display list of conversations with other platform users
2. Provide real-time or near-real-time messaging capabilities
3. Enable search functionality for finding specific conversations
4. Show message threads with timestamps and read status
5. Allow users to compose and send new messages

---

## Layout Structure

### Overall Page Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          HEADER NAVIGATION                          │
├───────────────┬─────────────────────────────────────────────────────┤
│               │                                                     │
│   SIDEBAR     │                  MAIN CONTENT AREA                  │
│   (Fixed)     │                                                     │
│               │  ┌───────────────────────────────────────────────┐  │
│  MAIN         │  │         Dashboard Title Area                  │  │
│  ├─Dashboard  │  │              "Messages"                       │  │
│  └─Message ●  │  └───────────────────────────────────────────────┘  │
│               │                                                     │
│  MANAGE       │  ┌──────────────────┬────────────────────────────┐  │
│  LISTINGS     │  │                  │                            │  │
│  ├─Add Prop   │  │  CONVERSATION    │     CHAT THREAD            │  │
│  ├─My Props   │  │  LIST            │                            │  │
│  ├─Favorites  │  │                  │  ┌──────────────────────┐  │  │
│  ├─Saved Srch │  │  ┌──────────┐    │  │ User Header          │  │  │
│  └─Reviews    │  │  │ Search   │    │  │ Arlene McCoy | Active│  │  │
│               │  │  └──────────┘    │  └──────────────────────┘  │  │
│  MANAGE       │  │                  │                            │  │
│  ACCOUNT      │  │  ┌──────────┐    │  ┌──────────────────────┐  │  │
│  ├─My Package │  │  │ Contact 1│    │  │ Message List         │  │  │
│  ├─My Profile │  │  │ Contact 2│    │  │ - Sent messages      │  │  │
│  └─Logout     │  │  │ Contact 3│    │  │ - Reply messages     │  │  │
│               │  │  │ ...      │    │  │ - Timestamps         │  │  │
│               │  │  └──────────┘    │  └──────────────────────┘  │  │
│               │  │                  │                            │  │
│               │  │                  │  ┌──────────────────────┐  │  │
│               │  │                  │  │ Message Input        │  │  │
│               │  │                  │  │ [Type message] [Send]│  │  │
│               │  │                  │  └──────────────────────┘  │  │
│               │  └──────────────────┴────────────────────────────┘  │
│               │                                                     │
├───────────────┴─────────────────────────────────────────────────────┤
│                          FOOTER                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Two-Column Layout

The message page uses a responsive two-column layout:

**Left Column (Conversation List):**
- Width: `col-lg-6 col-xl-5 col-xxl-4`
- Contains contact list with search

**Right Column (Chat Thread):**
- Width: `col-lg-6 col-xl-7 col-xxl-8`
- Contains active conversation

---

## Data Content Structure

### Dashboard Title Area

```html
<div class="dashboard_title_area">
  <h2>Messages</h2>
  <p class="text">We are glad to see you again!</p>
</div>
```

### Conversation List Component

**Container:** `.message_container`

#### Search Box

```html
<div class="inbox_user_list">
  <div class="iu_heading pr35">
    <div class="chat_user_search">
      <form class="d-flex align-items-center">
        <button class="btn" type="submit">
          <span class="flaticon-search"></span>
        </button>
        <input class="form-control" type="search" 
               placeholder="Search" 
               aria-label="Search" 
               required="">
      </form>
    </div>
  </div>
</div>
```

**Search Fields:**
| Field     | Type   | Placeholder | Required |
|-----------|--------|-------------|----------|
| search    | search | "Search"    | Yes      |

#### Contact List Structure

**Container:** `.chat-member-list`

**Individual Contact Item:**

```html
<div class="list-item">
  <a href="#">
    <div class="d-flex align-items-center position-relative">
      <img alt="[Name]'s profile" 
           class="img-fluid float-start rounded-circle mr10" 
           src="/images/inbox/ms1.png">
      <div class="d-sm-flex">
        <div class="d-inline-block">
          <div class="fz14 fw600 dark-color ff-heading mb-0">[Contact Name]</div>
          <p class="preview">[Role/Title]</p>
        </div>
        <div class="iul_notific">
          <small>[Time]</small>
          <div class="m_notif [status]">[Unread Count]</div>
        </div>
      </div>
    </div>
  </a>
</div>
```

**Contact Data Structure:**

```typescript
interface Contact {
  id: string;
  name: string;
  avatar: string;
  role: string;
  lastMessage?: string;
  timestamp: string;
  unreadCount: number;
  status: 'online' | 'away' | 'busy' | 'none';
}
```

**Sample Contacts Data:**

| Name                | Role                | Time     | Status  | Unread |
|---------------------|---------------------|----------|---------|--------|
| Darlene Robertson   | Head of Development | 35 mins  | online  | 2      |
| Jane Cooper         | Head of Development | 35 mins  | none    | 2      |
| Arlene McCoy        | Head of Development | 35 mins  | away    | 2      |
| Albert Flores       | Head of Development | 35 mins  | busy    | 2      |

**Status Indicator Classes:**

| Status  | CSS Class       | Visual Indicator |
|---------|-----------------|------------------|
| Online  | `.online`       | Green dot        |
| Away    | `.away`         | Yellow dot       |
| Busy    | `.busy`         | Red dot          |
| Offline | `.none`         | No indicator     |

### Chat Thread Component

**Container:** `.message_container`

#### User Header

```html
<div class="user_heading px-0 mx30">
  <div class="wrap">
    <span class="contact-status online"></span>
    <img alt="ms3.png" class="img-fluid mr10" src="/images/inbox/ms3.png">
    <div class="meta d-sm-flex justify-content-sm-between align-items-center">
      <div class="authors">
        <h6 class="name mb-0">Arlene McCoy</h6>
        <p class="preview">Active</p>
      </div>
      <div>
        <a class="text-decoration-underline fz14 fw600 dark-color ff-heading" href="#">
          Delete Conversation
        </a>
      </div>
    </div>
  </div>
</div>
```

**Header Elements:**
- Contact status indicator (online/offline)
- Contact avatar image
- Contact name and status text
- Delete Conversation link

#### Message Thread List

**Container:** `.inbox_chatting_box`

**Message List:** `.chatting_content`

**Sent Message Structure (Left-aligned):**

```html
<li class="sent float-start">
  <div class="d-flex align-items-center mb15">
    <img alt="[Sender]'s profile" class="img-fluid rounded-circle align-self-start mr10">
    <div class="title fz14 ml10">
      [Sender Name]
      <small class="ml10">[Time]</small>
    </div>
  </div>
  <p>[Message content]</p>
</li>
```

**Reply Message Structure (Right-aligned):**

```html
<li class="reply float-end">
  <div class="d-flex align-items-center justify-content-end mb15">
    <div class="title fz14 mr10">
      <small>[Time]</small>
    </div>
    <img alt="You's profile" class="img-fluid rounded-circle align-self-end ml10">
  </div>
  <p>[Message content]</p>
</li>
```

**Message Types:**

| Type   | CSS Class | Alignment | Description                    |
|--------|-----------|-----------|--------------------------------|
| Sent   | `.sent`   | Left      | Messages from other user       |
| Reply  | `.reply`  | Right     | Messages from current user     |

**Sample Message Thread:**

| Direction | Sender          | Content                                                  | Time    |
|-----------|-----------------|----------------------------------------------------------|---------|
| sent      | Albert Flores   | How likely are you to recommend our company...          | 35 mins |
| reply     | You             | Hey there, we're just writing to let you know...        | 35 mins |
| reply     | You             | Are we meeting today?                                    | 35 mins |
| reply     | You             | The project finally complete! Let's go to!              | 35 mins |
| sent      | Albert Flores   | Let's go!                                                | 35 mins |
| sent      | Albert Flores   | simply dummy text of the printing and typesetting...    | 35 mins |
| sent      | Albert Flores   | Hello, John!                                             | 35 mins |

#### Message Input Form

```html
<div class="mi_text">
  <div class="message_input">
    <form class="d-flex align-items-center">
      <input class="form-control" 
             type="search" 
             placeholder="Type a Message" 
             aria-label="Search" 
             required="">
      <button type="submit" class="btn ud-btn btn-thm">
        Send Message
        <i class="fal fa-arrow-right-long"></i>
      </button>
    </form>
  </div>
</div>
```

**Input Fields:**
| Field         | Type   | Placeholder        | Required |
|---------------|--------|--------------------| ---------|
| message       | text   | "Type a Message"   | Yes      |

---

## Component Breakdown

### 1. Conversation List Component

**Location:** Left panel

**Props:**
```typescript
interface ConversationListProps {
  contacts: Contact[];
  activeContactId: string;
  onSelectContact: (contactId: string) => void;
  onSearch: (query: string) => void;
}
```

**Sub-components:**
- SearchBox
- ContactItem
- StatusIndicator

### 2. Contact Item Component

**Props:**
```typescript
interface ContactItemProps {
  id: string;
  name: string;
  avatar: string;
  role: string;
  timestamp: string;
  unreadCount: number;
  status: 'online' | 'away' | 'busy' | 'none';
  isActive: boolean;
  onClick: () => void;
}
```

**Features:**
- Avatar with status indicator
- Unread message badge
- Timestamp display
- Hover and active states

### 3. Chat Thread Component

**Location:** Right panel

**Props:**
```typescript
interface ChatThreadProps {
  contact: Contact;
  messages: Message[];
  onSendMessage: (content: string) => void;
  onDeleteConversation: () => void;
}
```

**Sub-components:**
- UserHeader
- MessageList
- MessageItem
- MessageInput

### 4. Message Item Component

**Props:**
```typescript
interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface MessageItemProps {
  message: Message;
}
```

**Features:**
- Different styling for sent/received messages
- Timestamp display
- Sender avatar
- Read receipts (optional)

### 5. Message Input Component

**Props:**
```typescript
interface MessageInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
}
```

**Features:**
- Text input field
- Send button with icon
- Enter key submission
- Character limit (optional)

---

## Interactive Elements

### Search Functionality

**Trigger:** Type in search box and submit form

**Behavior:**
- Filter contacts list by name
- Real-time filtering (optional)
- Clear search on escape

### Contact Selection

**Trigger:** Click on contact item

**Behavior:**
- Load conversation thread
- Update active state styling
- Scroll to latest message
- Mark messages as read

### Send Message

**Trigger:** Click "Send Message" button or press Enter

**Behavior:**
- Validate message content
- Send message via API
- Append to thread
- Clear input field
- Scroll to new message

### Delete Conversation

**Trigger:** Click "Delete Conversation" link

**Behavior:**
- Show confirmation dialog
- Delete conversation via API
- Return to empty state or first contact

### Status Indicators

| Status  | Color | Behavior                    |
|---------|-------|----------------------------|
| online  | Green | User is currently active    |
| away    | Yellow| User is idle                |
| busy    | Red   | User has set busy status    |
| none    | Gray  | User is offline             |

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width      | Layout Behavior                              |
|------------|------------|---------------------------------------------|
| xs         | < 576px    | Single column, full-width chat              |
| sm-md      | 576-991px  | Toggled view between list and chat          |
| lg         | ≥ 992px    | Two-column layout visible                   |
| xl         | ≥ 1200px   | Optimized spacing (5:7 ratio)               |
| xxl        | ≥ 1400px   | Full layout (4:8 ratio)                     |

### Mobile Behavior

1. **Conversation List:**
   - Takes full width
   - Chat thread hidden until contact selected
   - Back button to return to list

2. **Chat Thread:**
   - Full width when active
   - Hide conversation list
   - Back navigation to list

### Tablet/Desktop Behavior

1. Split view with both panels visible
2. Conversation list on left (narrower)
3. Chat thread on right (wider)
4. Proper spacing adjustments

---

## CSS Classes Reference

### Layout Classes

```css
.message_container        /* Message panel container */
.inbox_user_list          /* Conversation list wrapper */
.iu_heading               /* Search area header */
.chat-member-list         /* Scrollable contact list */
.list-item                /* Individual contact item */
```

### Contact Classes

```css
.img-fluid               /* Responsive image */
.rounded-circle          /* Circular avatar */
.mr10                    /* Margin right 10px */
.preview                 /* Role/title text */
.iul_notific             /* Notification area */
.m_notif                 /* Unread badge */
.m_notif.online          /* Online status */
.m_notif.away            /* Away status */
.m_notif.busy            /* Busy status */
.m_notif.none            /* No status */
```

### Chat Thread Classes

```css
.user_heading            /* Chat header */
.contact-status          /* Status indicator dot */
.inbox_chatting_box      /* Message thread container */
.chatting_content        /* Message list (ul) */
.sent                    /* Received message (left) */
.reply                   /* Sent message (right) */
.mi_text                 /* Message input area */
.message_input           /* Input form container */
```

---

## Data Fetching Requirements

### API Endpoints Expected

1. **Get Conversations:**
   ```
   GET /api/messages/conversations
   ```
   Returns: List of conversations with preview data

2. **Get Conversation Messages:**
   ```
   GET /api/messages/conversations/:conversationId
   Query: ?page=1&limit=50
   ```
   Returns: Paginated message list

3. **Send Message:**
   ```
   POST /api/messages/conversations/:conversationId
   Body: { content: string }
   ```
   Returns: New message object

4. **Delete Conversation:**
   ```
   DELETE /api/messages/conversations/:conversationId
   ```
   Returns: Success confirmation

5. **Search Contacts:**
   ```
   GET /api/messages/search?q=query
   ```
   Returns: Filtered contact list

6. **Mark as Read:**
   ```
   PATCH /api/messages/conversations/:conversationId/read
   ```
   Returns: Updated unread count

### Real-time Updates (Optional)

- WebSocket connection for new messages
- Typing indicators
- Read receipts
- Online status updates

---

## State Management

### Local State

```typescript
interface MessagePageState {
  contacts: Contact[];
  activeContact: Contact | null;
  messages: Message[];
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
}
```

### Actions

- `selectContact(contactId)`
- `sendMessage(content)`
- `deleteConversation(conversationId)`
- `searchContacts(query)`
- `loadMoreMessages()`

---

## Accessibility Considerations

1. **ARIA Labels:**
   - Search input with label
   - Message list with aria-live for updates
   - Button labels for actions

2. **Keyboard Navigation:**
   - Tab through contacts
   - Enter to select contact
   - Arrow keys in message list
   - Enter to send message

3. **Screen Reader:**
   - Announce new messages
   - Read message timestamps
   - Indicate unread status

---

## Performance Considerations

1. **Message Pagination:**
   - Load initial messages (50)
   - Infinite scroll for older messages
   - Virtual scrolling for long threads

2. **Image Optimization:**
   - Lazy load avatars
   - Use Next.js Image component
   - Small avatar sizes (50x50)

3. **Real-time Updates:**
   - Throttle typing indicators
   - Batch message updates
   - Reconnection handling

---

## Related Files

- `/app/(property)/(dashboard)/dashboard-message/page.tsx` - Page component
- `/components/dashboard/ConversationList.tsx` - Contact list
- `/components/dashboard/ChatThread.tsx` - Message thread
- `/components/dashboard/MessageInput.tsx` - Input component
- `/components/dashboard/ContactItem.tsx` - Contact item

---

## Technical Implementation

### State Management
- zustand: ^4.4.0 for global state
- @tanstack/react-query: ^5.8.0 for server state
- axios: ^1.6.0 for API calls

### Form Handling
- react-hook-form: ^7.48.0
- zod: ^3.22.0 for validation

### Message Features
- Real-time messaging with WebSocket support
- Typing indicators
- Read receipts
- Online status tracking

### Key Dependencies
- socket.io-client: ^4.7.0 for real-time updates
- react-infinite-scroll-component: ^6.1.0 for message pagination
- date-fns: ^3.0.0 for date formatting

---

## GSAP Animations Used

**Note**: This template uses **AOS (Animate On Scroll)** library, NOT GSAP.

### Animation Library
```json
{
  "aos": "^2.3.4"
}
```

### AOS Animation Types Used:
| Animation | Description | Usage |
|-----------|-------------|-------|
| `fade-in` | Fade in without movement | Message items |
| `fade-up` | Fade in from bottom | Contact list items |
| `slide-right` | Slide from left | Chat thread appearance |

### CSS Transitions:
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Contact Items | background-color | 200ms | ease |
| Message Bubbles | opacity, transform | 300ms | ease-out |
| Status Indicators | opacity | 200ms | ease |
| Send Button | background-color | 200ms | ease |

---

## Theme Variables

### CSS Custom Properties:
```css
/* Font Families */
--title-font-family: "__Poppins_85583a", "__Poppins_Fallback_85583a";
--body-font-family: "__DM_Sans_e47c01", "__DM_Sans_Fallback_e47c01";
```

### Status Indicator Colors:
```css
.online    /* Green (#22c55e) */
.away      /* Yellow (#eab308) */
.busy      /* Red (#ef4444) */
.none      /* Gray (#9ca3af) */
```

### Message Styling:
```css
.sent      /* Left-aligned, received messages */
.reply     /* Right-aligned, sent messages */
.m_notif   /* Unread badge styling */
```

---

## CSS/Styling Approach

### Framework: Bootstrap 5
- Two-column responsive layout
- Flexbox for message alignment

### Component Classes:
```css
.message_container    /* Message panel container */
.inbox_user_list      /* Conversation list */
.user_heading         /* Chat header */
.inbox_chatting_box   /* Message thread */
.mi_text              /* Message input */
```

---

## NPM Libraries Required

### Real-time Communication:
```json
{
  "socket.io-client": "^4.7.0"
}
```

### Date Formatting:
```json
{
  "date-fns": "^3.0.0"
}
```

### Infinite Scroll:
```json
{
  "react-infinite-scroll-component": "^6.1.0"
}
```

### Animation:
```json
{
  "aos": "^2.3.4",
  "framer-motion": "^10.16.0"
}
```

---

## GSAP Animation Implementation

### NPM Dependencies

```json
{
  "gsap": "^3.12.0"
}
```

### Installation

```bash
npm install gsap
```

### GSAP Plugin Registration

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

### Conversation List Animation

```javascript
// Staggered entrance for contact items
const animateContactList = () => {
  const contacts = document.querySelectorAll('.chat-member-list .list-item');

  gsap.from(contacts, {
    opacity: 0,
    x: -20,
    stagger: 0.08,
    duration: 0.4,
    ease: 'power2.out'
  });
};

// Contact item hover animation
const initContactHover = () => {
  const contacts = document.querySelectorAll('.chat-member-list .list-item');

  contacts.forEach((contact) => {
    contact.addEventListener('mouseenter', () => {
      gsap.to(contact, {
        backgroundColor: 'rgba(227, 57, 97, 0.05)',
        x: 5,
        duration: 0.2
      });
    });

    contact.addEventListener('mouseleave', () => {
      gsap.to(contact, {
        backgroundColor: '',
        x: 0,
        duration: 0.2
      });
    });
  });
};
```

### Avatar Animation

```javascript
// Avatar entrance animation
const animateAvatars = () => {
  const avatars = document.querySelectorAll('.list-item img, .user_heading img');

  gsap.from(avatars, {
    scale: 0,
    borderRadius: '0%',
    stagger: 0.1,
    duration: 0.4,
    ease: 'back.out(1.7)'
  });
};

// Avatar hover effect
const initAvatarHover = () => {
  const avatars = document.querySelectorAll('.list-item img');

  avatars.forEach((avatar) => {
    avatar.addEventListener('mouseenter', () => {
      gsap.to(avatar, {
        scale: 1.1,
        boxShadow: '0 4px 15px rgba(227, 57, 97, 0.3)',
        duration: 0.2
      });
    });

    avatar.addEventListener('mouseleave', () => {
      gsap.to(avatar, {
        scale: 1,
        boxShadow: 'none',
        duration: 0.2
      });
    });
  });
};
```

### Status Indicator Animation

```javascript
// Status indicator pulse
const animateStatusIndicators = () => {
  const onlineIndicators = document.querySelectorAll('.contact-status.online, .m_notif.online');

  onlineIndicators.forEach((indicator) => {
    gsap.to(indicator, {
      scale: 1.2,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut'
    });
  });
};
```

### Message Thread Animation

```javascript
// Message entrance animation
const animateMessages = () => {
  const messages = document.querySelectorAll('.chatting_content li');

  gsap.from(messages, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.3,
    ease: 'power2.out'
  });
};

// Sent message animation (left-aligned)
const animateSentMessage = (messageEl) => {
  gsap.from(messageEl, {
    opacity: 0,
    x: -30,
    duration: 0.3,
    ease: 'power2.out'
  });
};

// Reply message animation (right-aligned)
const animateReplyMessage = (messageEl) => {
  gsap.from(messageEl, {
    opacity: 0,
    x: 30,
    duration: 0.3,
    ease: 'power2.out'
  });
};

// New message entrance
const animateNewMessage = (messageEl) => {
  gsap.from(messageEl, {
    opacity: 0,
    scale: 0.9,
    y: 20,
    duration: 0.3,
    ease: 'back.out(1.7)'
  });
};
```

### User Header Animation

```javascript
// Chat header entrance
const animateUserHeader = () => {
  const header = document.querySelector('.user_heading');

  gsap.from(header, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: 'power2.out'
  });
};

// Delete conversation link hover
const initDeleteLinkHover = () => {
  const deleteLink = document.querySelector('.user_heading a');

  deleteLink?.addEventListener('mouseenter', () => {
    gsap.to(deleteLink, {
      color: '#ef4444',
      duration: 0.2
    });
  });

  deleteLink?.addEventListener('mouseleave', () => {
    gsap.to(deleteLink, {
      color: '',
      duration: 0.2
    });
  });
};
```

### Message Input Animation

```javascript
// Input focus animation
const initMessageInputAnimation = () => {
  const input = document.querySelector('.message_input input');
  const container = document.querySelector('.message_input');

  input?.addEventListener('focus', () => {
    gsap.to(container, {
      boxShadow: '0 4px 20px rgba(227, 57, 97, 0.15)',
      duration: 0.3
    });
  });

  input?.addEventListener('blur', () => {
    gsap.to(container, {
      boxShadow: 'none',
      duration: 0.3
    });
  });
};

// Send button animation
const initSendButtonAnimation = () => {
  const sendBtn = document.querySelector('.message_input .ud-btn');

  sendBtn?.addEventListener('mouseenter', () => {
    gsap.to(sendBtn, {
      scale: 1.02,
      duration: 0.2
    });

    gsap.to(sendBtn.querySelector('i'), {
      x: 3,
      duration: 0.2
    });
  });

  sendBtn?.addEventListener('mouseleave', () => {
    gsap.to(sendBtn, {
      scale: 1,
      duration: 0.2
    });

    gsap.to(sendBtn.querySelector('i'), {
      x: 0,
      duration: 0.2
    });
  });

  sendBtn?.addEventListener('click', () => {
    gsap.to(sendBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  });
};
```

### Unread Badge Animation

```javascript
// Unread badge entrance
const animateUnreadBadges = () => {
  const badges = document.querySelectorAll('.m_notif');

  gsap.from(badges, {
    scale: 0,
    stagger: 0.05,
    duration: 0.3,
    ease: 'back.out(1.7)'
  });
};

// Badge pulse on new message
const pulseUnreadBadge = (badge) => {
  gsap.to(badge, {
    scale: 1.3,
    duration: 0.15,
    yoyo: true,
    repeat: 2,
    ease: 'power1.inOut'
  });
};
```

### Search Animation

```javascript
// Search input animation
const initSearchAnimation = () => {
  const searchInput = document.querySelector('.chat_user_search input');
  const searchIcon = document.querySelector('.chat_user_search .flaticon-search');

  searchInput?.addEventListener('focus', () => {
    gsap.to(searchInput, {
      boxShadow: '0 0 0 3px rgba(227, 57, 97, 0.1)',
      duration: 0.2
    });

    gsap.to(searchIcon, {
      color: '#e33961',
      scale: 1.1,
      duration: 0.2
    });
  });

  searchInput?.addEventListener('blur', () => {
    gsap.to(searchInput, {
      boxShadow: 'none',
      duration: 0.2
    });

    gsap.to(searchIcon, {
      color: '',
      scale: 1,
      duration: 0.2
    });
  });
};
```

### Complete Message Animation Init

```javascript
// Initialize all animations
const initMessageAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  animateContactList();
  initContactHover();
  animateAvatars();
  initAvatarHover();
  animateStatusIndicators();
  animateMessages();
  animateUserHeader();
  initDeleteLinkHover();
  initMessageInputAnimation();
  initSendButtonAnimation();
  animateUnreadBadges();
  initSearchAnimation();

  ScrollTrigger.refresh();
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', initMessageAnimations);
}
```

### React/Next.js Implementation

```tsx
// hooks/useMessageAnimations.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useMessageAnimations = () => {
  useEffect(() => {
    // Contact list stagger
    gsap.from('.chat-member-list .list-item', {
      opacity: 0,
      x: -20,
      stagger: 0.08,
      duration: 0.4,
      ease: 'power2.out'
    });

    // Message thread animation
    gsap.from('.chatting_content li', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.3,
      ease: 'power2.out'
    });

    // Send button hover
    const sendBtn = document.querySelector('.message_input .ud-btn');
    sendBtn?.addEventListener('mouseenter', () => {
      gsap.to(sendBtn, { scale: 1.02, duration: 0.2 });
    });
    sendBtn?.addEventListener('mouseleave', () => {
      gsap.to(sendBtn, { scale: 1, duration: 0.2 });
    });

    return () => {
      // Cleanup if needed
    };
  }, []);
};
```

---

## Notes

- This template uses AOS (Animate On Scroll) for animations, not GSAP
- Message timestamps show relative time (e.g., "35 mins")
- Unread badges show count up to 99
- Status indicators use dot overlay on avatar
- Delete conversation requires confirmation
- Search filters contacts in real-time
- Mobile view uses full-screen toggle between list and chat
- Socket.io required for real-time messaging features
