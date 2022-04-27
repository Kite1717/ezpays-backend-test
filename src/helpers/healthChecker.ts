export type HealthCheckStatus = 'UP' | 'DOWN';
export interface HealthCheckElement {
  id: string;
  status: HealthCheckStatus;
}

export interface HealthCheck {
  status: HealthCheckStatus;
  checks: Array<HealthCheckElement>;
}
class HealthChecker {
  private _health!: HealthCheck;

  constructor() {
    this._health = {
      status: 'DOWN',
      checks: [],
    };
  }

  setElementHealth(elementHealth: HealthCheckElement): void {
    let findIndex: number = this._health.checks.findIndex((el: HealthCheckElement) => el.id === elementHealth.id);
    if (findIndex === -1) {
      this._health.checks.push(elementHealth);
    } else {
      this._health.checks[findIndex].status = elementHealth.status;
    }

    this.decideHealth();
  }

  setGeneralHealth = (status: HealthCheckStatus): void => {
    this._health.status = status;
  };
  private decideHealth = (): void => {
    let find: HealthCheckElement | undefined = this._health.checks.find(
      (el: HealthCheckElement) => el.status === 'DOWN',
    );
    this._health.status = find ? 'DOWN' : 'UP';
  };
  getHealth(): HealthCheck {
    return this._health;
  }
}

export const healthCheck = new HealthChecker();
