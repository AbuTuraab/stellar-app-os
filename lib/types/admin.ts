import type { AdminProjectDetail, AdminProjectLifecycleStatus, AdminProjectType } from '@/lib/api/mock/adminProjects';

export type { AdminProjectDetail, AdminProjectLifecycleStatus, AdminProjectType };

export interface TableRow {
  id: string;
  selected: boolean;
}

export interface BulkActionPayload {
  projectIds: string[];
  action: 'approve' | 'pause' | 'archive' | 'delete';
  reason?: string;
}

export interface ConfirmationModalState {
  isOpen: boolean;
  action: 'approve' | 'pause' | 'archive' | 'delete' | null;
  projectId: string | null;
  projectIds: string[];
  reason?: string;
}

export interface TableFilterState {
  search: string;
  lifecycleStatus: AdminProjectLifecycleStatus | 'all';
  projectType: AdminProjectType | 'all';
  riskRating: 'Low' | 'Medium' | 'High' | 'all';
  sortBy: 'name' | 'lifecycleStatus' | 'credits' | 'createdAt';
  sortOrder: 'asc' | 'desc';
}