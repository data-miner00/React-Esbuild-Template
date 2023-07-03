import { Component, ErrorInfo, ReactNode } from "react";

interface TState {
  hasError: boolean;
}

interface TProps {
  children: ReactNode;
  fallback: ReactNode;
}

class ErrorBoundary extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: unknown): TState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
