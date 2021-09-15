import React from 'react'

interface LayoutProps {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className="grid">
      <div className="col-12">
        <div className="flex justify-content-between flex-wrap px-2 border-bottom-1 border-400">
          <div className="flex align-items-center justify-content-center">
            <h2>DS Days 2021 - React</h2>
          </div>
          <div className="flex align-items-center justify-content-center">
            <a href="https://github.com/TiZu/demo-dsday-21">
              <i
                className="pi pi-github"
                style={{ fontSize: '1.5rem', color: '#000' }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 px-5">{children}</div>
    </div>
  )
}

export default Layout
